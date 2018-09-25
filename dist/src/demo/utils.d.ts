import { Vec2, Align, Baseline } from './types';
export declare function pointOnCircle(angle: number, radius: number, center: Vec2): Vec2;
export declare function getTickData(ticks: {
    angle: number;
    label: string;
    labelOffset: Vec2;
}[], radius: number, center: Vec2): {
    angle: number;
    p1: [number, number];
    p2: [number, number];
    p3: [number, number];
    label: string;
    labelOffset: [number, number];
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
