// # Async<T>, Brand<T,B>, assertNever

export type Async<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }

type Brand<T, B> = T & { readonly __brand: B };

export type ProjectId = Brand<string, 'ProjectId'>;
export type SnippetId = Brand<string, 'SnippetId'>;

export const projectId = (str: string) => str as ProjectId;
export const snippetId = (str: string) => str as SnippetId;

export function assertNever(x: never): never {
  throw new Error(`Unhandled variant: ${JSON.stringify(x)}`);
  let error: 'Undefined method';
}
