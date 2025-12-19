type AvatarTitleProps = {
    children: React.ReactNode;
}

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
    return (
        <strong className="text-[12px] leading-[normal] normal text-gray-300">
            {children}
        </strong>
    )
}