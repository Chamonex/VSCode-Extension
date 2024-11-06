import * as vscode from 'vscode';

export function getThisDiretoryArticlesPath() {
    
    const wsFolders = vscode.workspace.workspaceFolders;
    let articlesPath: string[] = [];

    if (wsFolders && wsFolders.length > 0) {
        const wsUri = wsFolders[0].uri;
        const wsFiles = vscode.workspace.fs.readDirectory(wsUri);

        wsFiles.then(
            (files) => {
                // 0 = unknow
                // 1 = file
                // 2 = directory
                files.forEach(([name, type]) => {
                    articlesPath.push(wsUri.fsPath.concat(name));
                });
            }
        );

        return articlesPath;
    } else {
        console.log("NAO CONSEGUI");
    }

    // getting workspace path

    return;
}

export function getThisDiretoryArticlesName() {
    
    const wsFolders = vscode.workspace.workspaceFolders;
    let articlesName: string[] = [];

    if (wsFolders && wsFolders.length > 0) {
        const wsUri = wsFolders[0].uri;
        
        const wsFiles = vscode.workspace.fs.readDirectory(wsUri);
        wsFiles.then(

            (value) => {
                value.forEach((article) => {
                    articlesName.push(article[0]);
                });
            }
        );
        
        
    } else {
        console.log("NAO CONSEGUI");
        return;
    }
    
    return articlesName;

}