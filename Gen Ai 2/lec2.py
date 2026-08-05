import os
from openai import OpenAI

# Initialize OpenAI Client
client = OpenAI()

# 1. Upload Training Data File for Fine-Tuning
file = client.files.create(
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune"
)

# 2. Create Fine-Tuning Job using GPT-4o-mini
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini"
)

print(f"Fine-tuning job created with ID: {job.id}")

# =========================================================
# 3. Chat Completion Example
# =========================================================
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a medical domain expert assistant."},
        {"role": "user", "content": "number of leave days for employee"}
    ]
)

print("Chat Response:", response.choices[0].message.content)

# =========================================================
# 4. Generate Embeddings Example
# =========================================================
embedding_response = client.embeddings.create(
    model="text-embedding-3-small",
    input="number of leave days for employee"
)

embedding = embedding_response.data[0].embedding
print(f"Vector Size: {len(embedding)}")