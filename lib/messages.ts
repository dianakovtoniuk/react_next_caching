export interface Message {
  id: number;
  text: string;
}

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:8080';

export async function getMessages(): Promise<Message[]> {
  const response = await fetch(`${BACKEND_URL}/messages`, {
    next: { tags: ['msg'] },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch messages: ${response.status}`);
  }

  return response.json();
}

export async function addMessage(message: string) {
  const response = await fetch(`${BACKEND_URL}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: message }),
  });

  if (!response.ok) {
    throw new Error(`Failed to add message: ${response.status}`);
  }
}