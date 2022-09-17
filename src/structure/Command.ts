export interface CommandOptions<Args extends Array<any>> {
	readonly name: string
	readonly execute: (...args: Args) => void | Promise<void>
}
export abstract class Command<T, Args extends Array<any> = [ T ]> {
	public readonly name: string
	private readonly _execute: (...args: Args) => void | Promise<void>
	constructor(options: CommandOptions<Args>) {
		this.name = options.name
		this._execute = options.execute
	}
	protected abstract transform(x: T): Args
	public abstract isMine(x: T): boolean
	public execute(x: T) {
		this._execute(...this.transform(x))
	}
}
