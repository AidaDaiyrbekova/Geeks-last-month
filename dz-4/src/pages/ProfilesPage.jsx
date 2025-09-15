import { Grid, Card, CardContent, Typography, Button, CardMedia } from "@mui/material";

const profiles = [
  {
    id: 1,
    name: "Thor Odinson",
    role: "God of Thunder",
    img: "https://i.redd.it/l4ng949c4bib1.jpg",
  },
  {
    id: 2,
    name: "Bruce Banner",
    role: "Hulk",
    img: "https://i.pinimg.com/736x/3a/0e/c6/3a0ec678335280f0c0d8135ca460c70e.jpg",
  },
  {
    id: 3,
    name: "Clint Barton",
    role: "Hawkeye",
    img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-avengers/4/41/Hawkeye_art.jpg",
  },
];

export default function ProfilesPage() {
  return (
    <Grid container spacing={3} justifyContent="center">
      {profiles.map((p) => (
        <Grid item xs={12} sm={6} md={4} key={p.id}>
          <Card
            sx={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={p.img}
              alt={p.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {p.name}
              </Typography>
              <Typography color="text.secondary">{p.role}</Typography>
              <Button sx={{ mt: 2 }} variant="contained">
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
