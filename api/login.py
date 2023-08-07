from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS
from pymongo import MongoClient
from pymongo.server_api import ServerApi


app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for your app

uri = "mongodb+srv://myMac:clothingApp@cluster0.l19f373.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["clothing_app"]

options = ["top", "bottom", "shoes", "accessories"]

@app.route('/api/options', methods=['GET'])
def get_options():
    return jsonify(options)


# API route to save username and password to MongoDB
@app.route('/api/register', methods=['POST'])
def register_user():
    collection_name = 'user_data'  # Replace with the name of your MongoDB collection

    # Get username and password from the request's JSON data
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Validate input (you may want to add more validation as per your requirements)
    if not username or not password:
        return jsonify({'message': 'Both username and password are required.'}), 400

    # Check if the username already exists in the database
    if db[collection_name].find_one({'username': username}):
        return jsonify({'message': 'Username already exists. Please choose a different one.'}), 409

    # Save the username and password in the database
    user_data = {
        'username': username,
        'password': password
    }
    db[collection_name].insert_one(user_data)

    return jsonify({'message': 'User registered successfully.'}), 201


if __name__ == '__main__':
    app.run(debug=True)
