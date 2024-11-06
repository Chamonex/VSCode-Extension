import * as vscode from 'vscode';

export function getThisDiretoryArticlesPath() {
    
    const wsFolders = vscode.workspace.workspaceFolders;
    let articlesPath: string[] = [];

    if (wsFolders && wsFolders.length > 0) {
        const wsUri = wsFolders[0].uri;
        const wsFiles = vscode.workspace.fs.readDirectory(wsUri);

        console.log("HERE\n\n");
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
    console.log("wsFolders - ", wsFolders);

    if (wsFolders && wsFolders.length > 0) {
        const wsUri = wsFolders[0].uri;
        console.log("wsUri - ", wsUri);
        
        const wsFiles = vscode.workspace.fs.readDirectory(wsUri);
        console.log("wsFiles - ", wsFiles);
        // PROBLEMA AQUI
        wsFiles.then(
            (files) => {
                // 0 = unknow
                // 1 = file
                // 2 = directory
                console.log("files -> ", files);
                files.forEach(([name, type]) => {
                    console.log("article: ", name);
                    articlesName.push(name);
                });
            }
        );
        console.log("articleName:", articlesName);
    } else {
        console.log("NAO CONSEGUI");
        return;
    }

    // getting workspace path
    return articlesName;
}