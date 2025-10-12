from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import generate_link, get_message

@api_view(['POST'])
def create_link(request):
    message = request.data.get('message')
    print("Mensaje recibido:", message)
    if not message:
        return Response({'error': 'No hay mensaje'}, status=400)
    key = generate_link(message)
    print("Key generada:", key)
    return Response({'key': key})

@api_view(['GET'])
def reveal_message(request, key):
    message = get_message(key)
    if not message:
        return Response({'error': 'Link no válido o ya fue revelado'}, status=404)
    return Response({'message': message})
