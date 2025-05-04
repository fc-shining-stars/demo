# Football Club Components Guide

This guide outlines the essential components for building a football club website. Use this as a reference when generating components with the AI assistant.

## Player Components

### PlayerCard

A card displaying player information.

**Key Features:**
- Player photo
- Name and number
- Position
- Key statistics
- Team information

**Example Usage:**
```
.\generate-component.bat PlayerCard vanilla "A card displaying player information" ./components
```

### PlayerProfile

A detailed player profile page/component.

**Key Features:**
- Biography
- Career statistics
- Photo gallery
- Performance charts
- Social media links

## Team Components

### TeamRoster

A grid or list of players with filtering options.

**Key Features:**
- Filter by position
- Sort by various statistics
- Grid/List view toggle
- Search functionality

### TeamStatistics

Team statistics display with visualizations.

**Key Features:**
- Win/loss record
- Goals scored/conceded
- League position
- Performance trends

## Match Components

### MatchCard

A card displaying match information.

**Key Features:**
- Teams and scores
- Date and time
- Venue
- Competition/tournament
- Match status (upcoming, live, completed)

### MatchSchedule

A schedule of upcoming and past matches.

**Key Features:**
- Calendar view
- Filter by competition
- Home/away toggle
- Result indicators

### MatchReport

A detailed match report component.

**Key Features:**
- Match summary
- Scoring timeline
- Key events
- Player statistics
- Photo gallery

## News Components

### NewsCard

A card displaying news article preview.

**Key Features:**
- Headline
- Publication date
- Category
- Featured image
- Brief excerpt

### NewsGrid

A grid of news articles with filtering.

**Key Features:**
- Category filters
- Date sorting
- Search functionality
- Pagination

## Membership Components

### MembershipTiers

Display of membership options and benefits.

**Key Features:**
- Tier comparison
- Pricing information
- Benefits list
- Call-to-action buttons

### RegistrationForm

Membership or fan club registration form.

**Key Features:**
- Personal information fields
- Membership selection
- Payment integration
- Terms and conditions

## Event Components

### EventCalendar

Calendar of club events.

**Key Features:**
- Monthly/weekly view
- Event categories
- Location information
- Registration links

## Community Components

### SocialFeed

Social media integration component.

**Key Features:**
- Twitter/Instagram feeds
- Fan photos
- Social sharing buttons
- Hashtag campaigns

## E-commerce Components

### ProductCard

Display of merchandise items.

**Key Features:**
- Product image
- Price
- Size/variant selection
- Add to cart functionality

### ShoppingCart

Shopping cart component for merchandise.

**Key Features:**
- Item list
- Quantity adjustments
- Price calculations
- Checkout process

## Using the AI to Generate Components

When generating components, be specific about the requirements and design preferences:

```
npm run ai-execute -- "Generate a PlayerCard component with hover effects that displays the player's photo, name, number, position, and key statistics. Use a color scheme that matches our club colors."
```

The more detailed your description, the better the AI can assist in creating components that match your football club's branding and requirements.
