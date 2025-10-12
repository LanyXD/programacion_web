import uuid
from .redis_client import redis_client


def generate_link(message):
    key = str(uuid.uuid4())
    redis_client.set(key, message)
    return key


def get_message(key):
    message = redis_client.get(key)
    
    if message:
        redis_client.delete(key)
    
    return message