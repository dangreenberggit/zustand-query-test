import React from "react";
import {
    usePostsIsSelected,
    usePostsStoreActions,
} from "../../../components/Posts/posts.store";
import { IPostItem } from "../../../components/Posts/posts.api";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 rounded-lg shadow-md flex items-center gap-4">
        {children}
    </div>
);

const CheckBox = ({
    checked,
    onChange,
}: {
    checked: boolean;
    onChange: () => void;
}) => (
    <input
        type="checkbox"
        className="scale-150 cursor-pointer"
        checked={checked}
        onChange={onChange}
    ></input>
);

const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col gap-2">{children}</div>
);

const PostItem = ({ title, body, id }: IPostItem) => {
    // Hook to select the post
    const { togglePostSelect } = usePostsStoreActions();
    return (
        <Wrapper>
            <CheckBox
                checked={usePostsIsSelected(id)}
                onChange={() => togglePostSelect(id)}
            />
            <ContentWrapper>
                <h3>{title}</h3>
                <p className="m-0 text-sm">{body}</p>
            </ContentWrapper>
        </Wrapper>
    );
};

export default PostItem;
