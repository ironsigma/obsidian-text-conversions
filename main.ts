import { Editor, Plugin } from 'obsidian';

export default class TextConversionsPlugin extends Plugin {
	async onload() {

		this.addCommand({
			id: 'text-conversions-uppercase',
			name: 'Upper case',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().toUpperCase());
			}
		});

		this.addCommand({
			id: 'text-conversions-lowercase',
			name: 'Lower case',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().toLowerCase());
			}
		});

		this.addCommand({
			id: 'text-conversions-word-case',
			name: 'Word case',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().split(' ')
						.map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' '));
			}
		});

		this.addCommand({
			id: 'text-conversions-sentence-case',
			name: 'Sentence case',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().split(/\. +/)
						.map((sentence) => sentence[0].toUpperCase() + sentence.substring(1).toLowerCase()).join('. '));
			}
		});

		this.addCommand({
			id: 'text-conversions-rot13',
			name: 'ROT13',
			editorCallback: (editor: Editor) => {
				const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
				editor.replaceSelection(editor.getSelection().replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]));
			}
		});

		this.addCommand({
			id: 'text-conversions-base64-encode',
			name: 'Base64 Encode',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(btoa(editor.getSelection()));
			}
		});

		this.addCommand({
			id: 'text-conversions-base64-decode',
			name: 'Base64 Decode',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(atob(editor.getSelection()));
			}
		});

		this.addCommand({
			id: 'text-conversions-remove-spaces',
			name: 'Remove all spaces',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp(' ', 'g'), ''));
			}
		});

		this.addCommand({
			id: 'text-conversions-spaces-to-underscore',
			name: 'Replace spaces with underscore',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp(' ', 'g'), '_'));
			}
		});

		this.addCommand({
			id: 'text-conversions-underscore-to-spaces',
			name: 'Replace underscores with spaces',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp('_', 'g'), ' '));
			}
		});

		this.addCommand({
			id: 'text-conversions-dashes-to-spaces',
			name: 'Replace dashes with spaces',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp('-', 'g'), ' '));
			}
		});

		this.addCommand({
			id: 'text-conversions-spaces-to-dashes',
			name: 'Replace spaces with dashes',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp(' ', 'g'), '-'));
			}
		});

		this.addCommand({
			id: 'text-conversions-remove-multiple-spaces',
			name: 'Remove multiple spaces',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp(' +', 'g'), ' '));
			}
		});

		this.addCommand({
			id: 'text-conversions-remove-non-alpha-numeric',
			name: 'Remove Non-Alpha-numeric characters',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp('[^a-zA-Z0-9 \t]+', 'g'), ''));
			}
		});

		this.addCommand({
			id: 'text-conversions-hash-tag',
			name: 'Convert words to hash tags',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp('^|( +)', 'g'), ' #'));
			}
		});

		this.addCommand({
			id: 'text-conversions-url-encode',
			name: 'URL Encode',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(encodeURIComponent(editor.getSelection()));
			}
		});

		this.addCommand({
			id: 'text-conversions-url-decode',
			name: 'URL Decode',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(decodeURIComponent(editor.getSelection()));
			}
		});

		this.addCommand({
			id: 'text-conversions-add-spaces',
			name: 'Add Spaces',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().split('').join(' '));
			}
		});

		this.addCommand({
			id: 'text-conversions-reverse-text',
			name: 'Reverse text',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().split('').reverse().join(''));
			}
		});

		this.addCommand({
			id: 'text-conversions-reverse-words',
			name: 'Reverse words',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().split(' ')
						.map((word) => word.split('').reverse().join('')).join(' '));
			}
		});

		this.addCommand({
			id: 'text-conversions-flatten-list',
			name: 'Flatten list',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp('\n', 'g'), ', ')
						.replace(new RegExp('- ', 'g'), ''));
			}
		});

		this.addCommand({
			id: 'text-conversions-comma-to-list',
			name: 'Comma separated items to list',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(editor.getSelection().replace(new RegExp('^|(, *)', 'g'), '\n- '));
			}
		});

	}
}

