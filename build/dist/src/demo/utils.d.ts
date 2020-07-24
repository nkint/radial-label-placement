import { Vec2, Align, Baseline } from './types';
export declare function pointOnCircle(angle: number, radius: number, center: Vec2): Vec2;
export declare function getTickData(ticks: {
    angle: number;
    label: string;
    labelOffset: Vec2;
}[], radius: number, center: Vec2): {
    angle: number;
    p1: Vec2;
    p2: Vec2;
    p3: Vec2;
    label: string;
    labelOffset: Vec2;
}[];
export declare function strokeBoundingBox(context: CanvasRenderingContext2D, point: Vec2, width: number, height: number, textAlign: Align, textBaseline: Baseline): void;
export declare const offsetX: {
    start: (w: number) => number;
    center: (w: number) => number;
    end: (w: number) => number;
};
export declare const offsetY: {
    top: (h: number) => number;
    middle: (h: number) => number;
    bottom: (h: number) => number;
};
