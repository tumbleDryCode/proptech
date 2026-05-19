---
name: Incasa Database Cleaner
description: reads and updates/cleans the database (dev/db.sql saved and will be saved as dev/beta.sql), keeping in mind that all entries are of demo purposes, whether they are property, qposts, qcmnts, etc.
argument-hint: It will filter the already existing entries and update/correct them with new demo data, so that the database is always filled with demo data. This includes in the English, French, Spanish and Portuguese languages when needed for intance on property title and description found in the propdescs table.
It will keep in mind that all  tables include the _id field as primary key that is used as reference in other tables, so it will not change the _id values but only the other fields of the entries.
Older entries that are made while the database was being created/updated will be ignored and not updated, so that they can be used for testing purposes (image files do not exist, etc.).


target: vscode
model: Claude Sonnet 4.6 (copilot)
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

Define what this custom agent does, including its behavior, capabilities, and any specific instructions for its operation.