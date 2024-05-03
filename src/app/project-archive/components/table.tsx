"use client";

import * as React from "react"
import {cn} from "@/lib/utils";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({className, ...props}, ref) => (
    <table
        ref={ref}
        className={cn("mt-12 w-full border-collapse text-left", className)}
        {...props}
    />
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <thead ref={ref}
           className={cn("sticky top-0 z-10 border-b border-slate-300/10  px-6 py-5 backdrop-blur", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <tbody
        ref={ref}
        {...props}
    />
))
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({className, ...props}, ref) => (
    <tr
        ref={ref}
        {...props}
    />
))
TableRow.displayName = "TableRow"

const TableRowBody = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({className, ...props}, ref) => (
    <tr
        ref={ref}
        className={cn("border-b border-slate-300/10 last:border-none", className)}
        {...props}
    />
))
TableRowBody.displayName = "TableRowBody"

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
    <th
        ref={ref}
        className={cn(
            "py-4 pr-8 text-sm font-semibold text-slate-200",
            className
        )}
        {...props}
    />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
    <td
        ref={ref}
        className={cn("py-4 pr-4 align-top", className)}
        {...props}
    />
))
TableCell.displayName = "TableCell"

export {Table, TableHeader, TableBody, TableRow, TableRowBody, TableHead, TableCell}