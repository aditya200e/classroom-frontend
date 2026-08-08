import type { Subject } from "../types/index.ts";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Data Structures",
        department: "CS",
        description:
            "Introduction to arrays, linked lists, stacks, queues, trees, graphs, and common algorithms.",
        createdAt: new Date(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Math",
        description:
            "Study of vectors, matrices, linear transformations, eigenvalues, and systems of equations.",
        createdAt: new Date(),
    },
    {
        id: 3,
        code: "ENG105",
        name: "Technical Communication",
        department: "English",
        description:
            "Develops academic and professional communication skills through writing, presentations, and documentation.",
        createdAt: new Date(),
    },
];