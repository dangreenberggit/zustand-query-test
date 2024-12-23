"use client";

import React from "react";
import { usePosts } from "../posts.queries";
import { IPostItem } from "../posts.api";
import PostItem from "./PostItem";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col gap-8">{children}</div>
);

const Posts = () => {
    // Hook to get posts from state and then map each to a single PostItem
    const { posts } = usePosts();
    return (
        <Wrapper>
            {posts?.map((x: IPostItem) => (
                <PostItem key={x.id} {...x} />
            ))}
            {posts?.length === 0 && <h3>No Posts</h3>}
        </Wrapper>
    );
};

export default Posts;
