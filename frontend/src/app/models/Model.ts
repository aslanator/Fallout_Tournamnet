export abstract class Model {
    abstract get attributes(): Record<string, any>;

    abstract get indexAttributes(): Record<string, string | number | null | undefined | Symbol>;
}