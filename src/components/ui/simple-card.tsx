import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SimpleCard({ children, className, ...props }: SimpleCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-white shadow sm:rounded-lg",
        className
      )}
      {...props}
    >
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}

interface SimpleCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function SimpleCardHeader({ title, description, className, ...props }: SimpleCardHeaderProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      <h3 className="text-lg font-medium leading-6 text-ibvi-charcoal [.text-white_&]:text-white">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground [.text-white_&]:text-white/80">{description}</p>
      )}
    </div>
  );
}

interface SimpleCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SimpleCardContent({ children, className, ...props }: SimpleCardContentProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

interface SimpleCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SimpleCardFooter({ children, className, ...props }: SimpleCardFooterProps) {
  return (
    <div className={cn("mt-4 flex justify-end space-x-3", className)} {...props}>
      {children}
    </div>
  );
}
