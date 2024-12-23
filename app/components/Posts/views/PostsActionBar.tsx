"use client";

import React from "react";
import { usePostsActionController } from "../../../components/Posts/posts.controller";

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "delete" | "refetch";
    children: React.ReactNode;
}

const Button = ({ variant, children, className, ...props }: ButtonProps) => {
    const variants = {
        delete: "bg-red-500 text-white",
        refetch: "bg-blue-500 text-white",
    };

    return (
        <button
            className={`border-0 px-8 py-[0.45rem] rounded-md font-medium cursor-pointer disabled:pointer-events-none disabled:opacity-60 ${
                variant ? variants[variant] : ""
            } ${className || ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

const PostsActionBar = () => {
    const { reFetchPosts, removeSelectedPosts, selectedPostsCount, removeAll } =
        usePostsActionController();

    return (
        <div className="flex gap-4">
            <Button variant="refetch" onClick={() => reFetchPosts()}>
                ReFetch
            </Button>
            <Button
                variant="delete"
                onClick={() => removeSelectedPosts()}
                disabled={selectedPostsCount === 0}
            >
                Delete {selectedPostsCount} post
                {selectedPostsCount > 1 ? "s" : null}
            </Button>
            <Button variant="delete" onClick={() => removeAll()}>
                Remove all
            </Button>
        </div>
    );
};

export default PostsActionBar;
