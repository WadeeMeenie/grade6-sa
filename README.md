# Grade 6 SA

Android-first Grade 6 learning app for South African learners.

## Product goal

Grade 6 SA is designed around the official South African CAPS curriculum and current Annual Teaching Plans (ATP), with the Department of Basic Education as the curriculum source of truth. The app turns curriculum objectives into an accessible learning loop:

**Learn → Practice → Mistake analysis → Explanation → Retry → Mastery → Assessment**

The app is intended to support WCED learners while remaining useful nationally.

## Initial subjects

- Mathematics
- Home Language / First Additional Language
- Natural Sciences & Technology
- Social Sciences (History + Geography)
- Life Skills

Language support is modelled as HL/FAL rather than assuming every learner uses English.

## Technology

- React Native
- Expo SDK 57
- TypeScript
- Supabase (planned backend)
- Android-first UI
- Offline-first content and progress architecture

Expo SDK 57 targets React Native 0.86 and Android API 36. See the official Expo documentation for the current SDK compatibility matrix.

## Curriculum integrity

Curriculum data will be versioned. Every learning objective, lesson and assessment item should be traceable to a curriculum version and source document. AI-generated explanations and questions must operate inside those curriculum boundaries.

This project is **not endorsed by or affiliated with WCED or the Department of Basic Education** unless formal endorsement is obtained.

## Copyright / content policy

The app will not scrape and repackage copyrighted textbook or ePortal material. We will create original explanations, activities and assessment items aligned to official curriculum objectives and reference official public sources where appropriate.

## Development

The first milestone is an Android-first learner experience with a real curriculum data model, design system, navigation shell, Mathematics curriculum seed data, and automated checks.
