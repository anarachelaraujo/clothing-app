from flask import Flask, request, jsonify, render_template_string
from flask_cors import CORS, cross_origin 
from pymongo import MongoClient
from pymongo.server_api import ServerApi
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

uri = "mongodb+srv://myMac:clothingApp@cluster0.l19f373.mongodb.net/?retryWrites=true&w=majority"       
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["clothing_app"]

@app.route('/')
def index():
    # Generate a nonce dynamically (you may use a more secure method for production)
    nonce = "randomly_generated_nonce"

    # Render the template with the nonce
    return render_template_string(
        '''
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Page</title>
            <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' 'nonce-{{ nonce }}'">
        </head>
        <body>
            <script nonce="{{ nonce }}">
                // Your inline script here
            </script>
        </body>
        </html>
        ''',
        nonce=nonce
    )

@app.route('/api/options', methods=['GET'])
def get_options():
    return jsonify(["top", "bottom", "shoes", "accessories"])


# API route to save email and password to MongoDB
@app.route('/api/register', methods=['POST'])
@cross_origin(allow_headers=['Content-Type'])
def register_user():
    collection_name = 'user_data'  # Replace with the name of your MongoDB collection

    # Get email and password from the request's JSON data
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Validate input (you may want to add more validation as per your requirements)
    if not email or not password:
        return jsonify({'message': 'Both email and password are required.'}), 400

    # Check if the email already exists in the database
    if db[collection_name].find_one({'email': email}):
        return jsonify({'message': 'email already exists. Please choose a different one.'}), 409

    # Save the email and password in the database
    user_data = {
        'email': email,
        'password': password
    }
    db[collection_name].insert_one(user_data)

    return jsonify({'message': 'User registered successfully.'}), 201


if __name__ == '__main__':
    app.run(debug=True)
