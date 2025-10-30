import {signal} from '@lit-labs/signals';

interface Face {
  age: number;
}

interface FaceDetection {
  numFaces: number;
  faces: Face[];
}

export const faceDetection = signal<FaceDetection>({numFaces: 0, faces: []});
