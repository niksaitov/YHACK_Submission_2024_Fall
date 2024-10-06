'use client';
import React from 'react';
import { Box, Heading, Text, Flex, Badge } from '@chakra-ui/react';

interface Course {
    courseNumber: string;
    courseTitle: string;
    crn: string;
    department: string;
    description: string;
    distDesg: string[];
    meetingPattern: string[];
    prerequisites: string;
}

interface CourseCardProps {
    course: Course;
}

// Define custom colors
const customColors = {
    cardBackground: "#a796c9",
    cardText: '#333333',
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
    <Box
        bg={customColors.cardBackground}
        p={4}
        borderRadius="md"
        boxShadow="md"
        color={customColors.cardText}
    >
        <Heading size="md" mb={2}>
            {course.department} {course.courseNumber}: {course.courseTitle}
        </Heading>
        <Text fontSize="sm" mb={2}>{course.description}</Text>

        <Flex justify="space-between" align="center" mb={2}>
            <Box display="flex" gap={2} mt={2}>
                {course.distDesg.map((designator, index) => (
                    <Badge key={index} colorScheme="purple">
                        {designator}
                    </Badge>
                ))}
            </Box>

            {/* Render meeting pattern only if it's not "HTBA" */}
            {course.meetingPattern[0] !== 'HTBA' && (
                <Text fontSize="sm">{course.meetingPattern[0]}</Text>
            )}
        </Flex>

        {/* Render prerequisites only if they are not "Value Not Provided" */}
        {course.prerequisites !== "Value Not Provided" && (
            <Text fontSize="sm" fontStyle="italic">
                Prerequisites: {course.prerequisites}
            </Text>
        )}
    </Box>
);

export default CourseCard;
