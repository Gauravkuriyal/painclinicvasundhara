import React from "react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function PageIntro({ crumbs, title,className }) {
    return (<>
        <div className={"px-[5%] py-[2%] flex items-center justify-center bg-[#00000072]/50 rounded-full"+" "+className}>
            <Breadcrumb >
            <BreadcrumbList className={"flex items-center justify-center"}>
                {crumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink className={className} href={crumb.link} >{crumb.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className={className} />
                    </React.Fragment>
                ))}
                <BreadcrumbItem >
                    <BreadcrumbPage className={className} >{title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        </div>
    </>)
}