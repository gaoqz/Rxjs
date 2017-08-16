export interface Lesson {
    id: number;
    description: string;
    seqNo?: number;
    duration?: string;
    completed?: boolean;
    url?: string;
    tags?: string;
    pro?: boolean;
    longDescription?: string;
    courseId?: string;
    videoUrl?: string;
}
