from flask import Flask, jsonify
from flask_cors import CORS  # Import Flask-CORS

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for your app

options = ["top", "bottom", "shoes", "accessories"]

@app.route('/api/options', methods=['GET'])
def get_options():
    return jsonify(options)

if __name__ == '__main__':
    app.run(debug=True)
