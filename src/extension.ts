import * as vscode from 'vscode';
import * as utils from './utils';
/*
	- alterar o estilo do preview de md para ficar igual ao Atlas.
*/
export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('atlas-contributor.orderArticles', () => {

		const articlesName = utils.getThisDiretoryArticlesName();
		console.log("extension.js\n", articlesName);
		if (articlesName) {
			vscode.window.showQuickPick(["a", "b"]);
		}
	});

	context.subscriptions.push(disposable);

}

export function deactivate() {}
