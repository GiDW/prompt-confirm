export = promptConfirm;

declare function promptConfirm (
    question: string,
    defaultAnswer: boolean,
    callback: (result: boolean) => void
): void;
