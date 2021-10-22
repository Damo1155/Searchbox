export const SetValue = (identifier: string, value: string | number): void => {
    sessionStorage.setItem(identifier, value.toString());
}

export const SetJSONObject = (identifier: string, object: any): void => {
    sessionStorage.setItem(identifier, JSON.stringify(object));
}

export const GetJSONObject = (identifier: string): Object | Array<Object> => {
    const sessionItem = sessionStorage.getItem(identifier);

    return sessionItem ? JSON.parse(sessionItem) : null;
}

export const RemoveItem = (identifier: string): void => {
    sessionStorage.removeItem(identifier);
}