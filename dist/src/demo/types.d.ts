export declare type Vec2 = [number, number];
export declare type Align = 'center' | 'end' | 'start';
export declare type Baseline = 'top' | 'middle' | 'bottom';
declare global {
    interface NodeModule {
        hot: {
            accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
            accept(dependency: string, callback: () => void): void;
            accept(errHandler?: (err: any) => void): void;
            decline(dependencies: string[]): void;
            decline(dependency: string): void;
            decline(): void;
            dispose(callback: (data: any) => void): void;
            addDisposeHandler(callback: (data: any) => void): void;
            removeDisposeHandler(callback: (data: any) => void): void;
        };
    }
}
