"use client";

import { useParams } from "next/navigation";

import { cn } from "@/lib/utils"
import Link from "next/link";

export function NavButtons(props: { name: string }) {

    const params = useParams();
    const str = `${ props.name }`;
    const modStr = str[0].toUpperCase() + str.slice(1);

    return (
        <Link
            href={`/${params.storeId}/${props.name}`}
            className={cn(
                'text-sm font-medium transition-colors hover:text-primary text-black dark:text-white text-muted-foreground'
            )}
        >
            {modStr}
        </Link>
    )

}