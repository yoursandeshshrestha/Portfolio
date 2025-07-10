import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const mermaidERD = `erDiagram
    %% Core User Management
    User {
        string id PK
        string email UK
        string password
        enum role
        datetime createdAt
        datetime updatedAt
    }
    
    Student {
        string id PK
        string fullName
        enum gender
        datetime dateOfBirth
        string phoneNumber
        string country
        string academicQualification
        string desiredDegree
        string certificateUrl
        string recommendationLetterUrl
        string profilePictureUrl
        string referredBy
        string referrerContact
        boolean agreesToTerms
        string userId FK
        enum applicationStatus
        enum paymentStatus
        datetime createdAt
        datetime updatedAt
    }
    
    Admin {
        string id PK
        string fullName
        string userId FK
        datetime createdAt
        datetime updatedAt
    }
    
    %% Application & Payment
    Application {
        string id PK
        string email UK
        string fullName
        enum gender
        datetime dateOfBirth
        string phoneNumber
        string country
        string academicQualification
        string desiredDegree
        string certificateUrl
        string recommendationLetterUrl
        string referredBy
        string referrerContact
        boolean agreesToTerms
        enum status
        datetime appliedAt
        string adminId FK
        datetime reviewedAt
        string rejectionReason
        string studentId FK
    }
    
    Payment {
        string id PK
        decimal amount
        string currency
        enum status
        enum paymentMethod
        string transactionId
        string studentId FK
        string applicationId FK
        datetime paidAt
        datetime paymentDueDate
        datetime createdAt
        datetime updatedAt
    }
    
    %% Course Management
    Course {
        string id PK
        string title
        string description
        int durationYears
        string coverImageUrl
        boolean isActive
        string adminId FK
        datetime createdAt
        datetime updatedAt
    }
    
    Chapter {
        string id PK
        string title
        string description
        int orderIndex
        int courseYear
        string courseId FK
        string adminId FK
        datetime createdAt
        datetime updatedAt
    }
    
    Video {
        string id PK
        string title
        string description
        string vimeoId
        string vimeoUrl
        int duration
        int orderIndex
        string chapterId FK
        datetime createdAt
        datetime updatedAt
    }
    
    %% Assessment System
    Exam {
        string id PK
        string title
        string description
        int passingScore
        int timeLimit
        string chapterId FK
        string adminId FK
        datetime createdAt
        datetime updatedAt
    }
    
    Question {
        string id PK
        string text
        string questionType
        json options
        string correctAnswer
        int points
        string examId FK
        datetime createdAt
        datetime updatedAt
    }
    
    ExamAttempt {
        string id PK
        string studentId FK
        string examId FK
        datetime startTime
        datetime endTime
        int score
        boolean isPassed
        datetime createdAt
        datetime updatedAt
    }
    
    Answer {
        string id PK
        string studentAnswer
        boolean isCorrect
        int points
        string questionId FK
        string examAttemptId FK
        datetime createdAt
        datetime updatedAt
    }
    
    %% Progress Tracking
    CourseEnrollment {
        string id PK
        string studentId FK
        string courseId FK
        datetime enrollmentDate
        boolean isActive
        datetime createdAt
        datetime updatedAt
    }
    
    ChapterProgress {
        string id PK
        string studentId FK
        string chapterId FK
        boolean isCompleted
        int lastVideoWatched
        datetime completedAt
        datetime createdAt
        datetime updatedAt
    }
    
    VideoProgress {
        string id PK
        string studentId FK
        string videoId FK
        int watchedPercent
        datetime lastWatchedAt
    }
    
    YearCertification {
        string id PK
        string studentId FK
        string courseId FK
        int year
        string certificateUrl
        datetime issuedAt
    }
    
    %% Communication
    Message {
        string id PK
        string content
        string senderId FK
        string recipientId FK
        boolean isRead
        datetime createdAt
        datetime updatedAt
    }
    
    Notification {
        string id PK
        string title
        string content
        boolean isRead
        string userId FK
        datetime createdAt
    }
    
    Announcement {
        string id PK
        string title
        string content
        string imageUrl
        boolean isActive
        string adminId FK
        datetime createdAt
        datetime updatedAt
    }
    
    %% Security
    RefreshToken {
        string id PK
        string tokenId UK
        string userId FK
        datetime expiresAt
        boolean isRevoked
        datetime createdAt
    }
    
    %% System
    EmailLog {
        string id PK
        string to
        string subject
        string content
        string status
        string errorMessage
        datetime createdAt
    }
    
    SystemSettings {
        string id PK
        string key UK
        string value
        datetime updatedAt
    }
    
    %% Relationships
    User ||--o{ Student : "has"
    User ||--o{ Admin : "has"
    User ||--o{ Message : "sends"
    User ||--o{ Message : "receives"
    User ||--o{ Notification : "has"
    User ||--o{ RefreshToken : "has"
    
    Student ||--o{ CourseEnrollment : "enrolls"
    Student ||--o{ ChapterProgress : "tracks"
    Student ||--o{ ExamAttempt : "attempts"
    Student ||--o{ VideoProgress : "watches"
    Student ||--o{ YearCertification : "receives"
    Student ||--o{ Payment : "makes"
    Student ||--|| Application : "applies"
    
    Admin ||--o{ Course : "creates"
    Admin ||--o{ Chapter : "creates"
    Admin ||--o{ Exam : "creates"
    Admin ||--o{ Application : "reviews"
    Admin ||--o{ Announcement : "creates"
    
    Course ||--o{ Chapter : "contains"
    Course ||--o{ CourseEnrollment : "enrolls"
    Course ||--o{ YearCertification : "certifies"
    
    Chapter ||--o{ Video : "contains"
    Chapter ||--|| Exam : "has"
    Chapter ||--o{ ChapterProgress : "tracks"
    
    Video ||--o{ VideoProgress : "watched"
    
    Exam ||--o{ Question : "contains"
    Exam ||--o{ ExamAttempt : "attempted"
    
    Question ||--o{ Answer : "answered"
    ExamAttempt ||--o{ Answer : "provides"
    
    Application ||--|| Payment : "pays"
`;

const ERDSimulator: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const id = "mermaid-erd";
      ref.current.innerHTML = `<div class=\"mermaid\" id=\"${id}\">${mermaidERD}</div>`;
      mermaid.init(undefined, `#${id}`);
    }
  }, []);

  return <div className="w-full overflow-x-auto" ref={ref} />;
};

export default ERDSimulator;
