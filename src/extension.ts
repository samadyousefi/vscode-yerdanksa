
import * as vscode from 'vscode';
import { COMMAND_MAPPINGS } from './constant/command-mappings';
const path = require('path');
const WebSocket = require('ws');
const express = require('express');
const open = require('open');
const app = express();
const port = 9000;
const websocketPort = 9001;

app.use('/', express.static(path.join(__dirname, 'client')));
app.listen(port, () => {
	vscode.window.showInformationMessage(`[Yerdanksa Rejshth] Server running at localhost:${port}`);
	open(`http://localhost:${port}`);
});


export function activate(context: vscode.ExtensionContext) {
	console.log('[Yerdanksa Rejshth] Congratulations, your extension "Yerdanksa Rejshth" is now active!');
	let disposable = vscode.commands.registerCommand('stt.dictate', () => {
		const wss = new WebSocket.Server({port: websocketPort});
		wss.on('connection', (socket: any) => {
			console.log('[Yerdanksa Rejshth] New WebSocket connection');
			vscode.window.showInformationMessage('[Yerdanksa Rejshth] New WebSocket connection');

			socket.on('message', (phrase: string) => {
				console.log(`[Yerdanksa Rejshth] New WebSocket message: ${phrase}`);
				vscode.window.showInformationMessage(`Speech : ${phrase}`);

				switch (phrase) {
					case "colon":
						 phrase=":";
						 break;

					case "equal":
						 phrase="=";
						 break;

					case "space":
						 phrase=" ";
						 break;

					case "parentheses": 
					phrase="( )";
					break;

					case "brace": 
					phrase="{ }";
					break;

					case "dot": 
					phrase=".";
						break;
				
						case "double quotation": 
					phrase="\" \"";
						break;
					
						case "single quotation": 
						phrase="' '";
							break;
						
							case "line": 
							phrase="\n";
								break;
					default:
						break;
				}

			
				// if (phrase==="class") {
				// 	phrase="class Person:\n"

				// }
				// if(phrase==="colon") phrase=":"
				// if(phrase==="equal") phrase="="
				
				
				const path = vscode.window.activeTextEditor?.document.fileName;
				
				if (path) {
					if (
						Object.keys(COMMAND_MAPPINGS).includes(phrase) && 
						(
							(Object.keys(COMMAND_MAPPINGS[phrase]).includes('if') && COMMAND_MAPPINGS[phrase].if) || 
							!Object.keys(COMMAND_MAPPINGS[phrase]).includes('if')
						)
					) {
						vscode.commands.executeCommand(COMMAND_MAPPINGS[phrase].command, ...(COMMAND_MAPPINGS[phrase].params || []));
					} else {
						const edit = new vscode.WorkspaceEdit();
						const uri = vscode.Uri.file(path);
						const cursorPos = vscode.window.activeTextEditor?.selection.active;
						const position = new vscode.Position(cursorPos?.line||0, cursorPos?.character||0);
						edit.insert(uri, position, phrase);
						vscode.workspace.applyEdit(edit).then(res => vscode.commands.executeCommand('editor.action.triggerSuggest'));
					}
				}
			});
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
