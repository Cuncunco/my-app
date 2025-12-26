'use client';

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
    url: string;
    title: string;
    description: string;
}

export const PostShare = ({url, title, description}: PostShareProps) => {

     const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });

    return (
          <aside>
            <h2 className="hidden md:block font-bold mb-4">Compartilhar</h2>

            <div className="flex justify-between md:flex-col gap-2">
              {shareButtons.map(button => (
                <Button
                  key={button.provider}
                  onClick={button.action}
                  variant="outline"
                  className="w-fit md:w-full justify-start gap-2"
                >
                  {button.icon}
                  <span className="hidden md:block">{button.name}</span>
                </Button>
              ))}
            </div>
          </aside>
    )
}