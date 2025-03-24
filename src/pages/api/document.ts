import {
  getDocument,
  saveDocument,
  deleteDocument,
  updateDocument,
  getAllDocuments,
} from "@controllers/document.controller";
import type { APIRoute } from "astro";

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") || "";
  try {
    let document;
    if (id) document = await getDocument(id);
    else document = await getAllDocuments();

    return new Response(JSON.stringify(document), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const POST: APIRoute = async ({ request }: { request: Request }) => {
  try {
    const data = await request.text();

    const savedDocument = await saveDocument(data);
    return new Response(JSON.stringify(savedDocument), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

export async function PUT({ request }: { request: Request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") || "";
  try {
    const data = await request.json();
    const updatedDocument = await updateDocument(id, data);
    return new Response(JSON.stringify(updatedDocument), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function DELETE({ request }: { request: Request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") || "";
  try {
    await deleteDocument(id);
    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
