from pymongo import MongoClient
from pymongo.server_api import ServerApi

class DatabaseConnection:
    def connectDatabase():
        uri = "mongodb+srv://myMac:clothingApp@cluster0.l19f373.mongodb.net/?retryWrites=true&w=majority"       
        client = MongoClient(uri, server_api=ServerApi('1'))
        return client["clothing_app"]