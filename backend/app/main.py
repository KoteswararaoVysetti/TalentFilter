from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import pdf
from dotenv import load_dotenv
load_dotenv()
app = FastAPI()

origins = [
    "http://localhost",  # Allow local development
    "http://localhost:3000",  # Allow local development
    "http://127.0.0.1",
    "http://127.0.0.1:3000",
    "https://yourfrontenddomain.com",  # Replace with your production frontend domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,  # Allow cookies to be sent across origins
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Include routers
app.include_router(pdf.router)