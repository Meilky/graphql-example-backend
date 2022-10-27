export class Author {
	id;
	name;

	constructor(author) {
		this.update(author);
	}

	get() {
		return {
			id: this.id,
			name: this.name,
		}
	}

	update(author) {
		if (typeof author.id === "number") {
			this.id = author.id
		}

		if (typeof author.name === "string") {
			this.name = author.name
		}
	}
}
