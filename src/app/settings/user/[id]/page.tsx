import { getUserById, getUserInfo } from "@/app/lib/settings";
import React from "react";
import { notFound } from "next/navigation";

async function User({ params }: { params: { id: string } }) {
    const { name, id, username, website} = await getUserById(params.id);
    if (!name) {
        notFound();
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">User {params.id}</h1>
            <div className="border border-dashed border-red-500 p-4">
                <p>Name: {name}</p>
                <p>id: {id}</p>
                <p>username: {username}</p>
                <p>website: {website}</p>
            </div>
        </div>
    );
}

export default User;