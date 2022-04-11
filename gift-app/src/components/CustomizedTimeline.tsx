import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import NightlifeRoundedIcon from '@mui/icons-material/NightlifeRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import { Paper } from '@mui/material';

const paperstyle = {
  padding: '8px 1px',
  textAlign: 'center',
};

export default function CustomizedTimeline() {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'auto',
        margin: 'auto 0',
        marginY: '5%',
        marginX: '5%',
        padding: '4%',
      }}
    >
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body1"
            color="text.secondary"
          >
            14.00
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <VolunteerActivismRoundedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '0px', px: 2 }}>
            <Typography variant="h5" component="span">
              Vielse
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body1"
            color="text.secondary"
          >
            15.00
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="primary">
              <EmojiPeopleRoundedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '24px', px: 2 }}>
            <Typography variant="h5" component="span">
              Mingling
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            variant="body1"
            color="text.secondary"
          >
            16.30
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <LocalDiningRoundedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '24px', px: 2 }}>
            <Typography variant="h5" component="span">
              Middag
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body1"
            color="text.secondary"
          >
            20.00
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="primary">
              <CakeRoundedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '24px', px: 2 }}>
            <Typography variant="h5" component="span">
              Kaffe og kaker
            </Typography>
            <Typography></Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            variant="body1"
            color="text.secondary"
          >
            21.00
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <NightlifeRoundedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '24px', px: 2 }}>
            <Typography variant="h5" component="span">
              Fest!
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body1"
            color="text.secondary"
          >
            01.00
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="primary">
              <LocalDiningRoundedIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '24px', px: 2 }}>
            <Typography variant="h5" component="span">
              Nattmat
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Paper>
  );
}
