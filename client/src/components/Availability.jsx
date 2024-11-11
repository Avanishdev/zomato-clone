// ScheduleManager.js
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function ScheduleManager() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState({});

  const handleDayChange = (event) => {
    const { name } = event.target;
    setSelectedDays(prevState => {
      if (prevState.includes(name)) {
        const updatedDays = prevState.filter(day => day !== name);
        const updatedTimeSlots = { ...timeSlots };
        delete updatedTimeSlots[name];
        setTimeSlots(updatedTimeSlots);
        return updatedDays;
      } else {
        return [...prevState, name];
      }
    });
  };

  const handleTimeChange = (event, day, index, field) => {
    const { value } = event.target;
    setTimeSlots(prevState => {
      const updatedSlots = { ...prevState };
      if (!updatedSlots[day]) updatedSlots[day] = [];
      if (!updatedSlots[day][index]) updatedSlots[day][index] = { start: '00:00', end: '00:00' };
      updatedSlots[day][index][field] = value;
      return updatedSlots;
    });
  };

  const handleAddSlot = (day) => {
    setTimeSlots(prevState => {
      const updatedSlots = { ...prevState };
      if (!updatedSlots[day]) updatedSlots[day] = [];
      updatedSlots[day].push({ start: '00:00', end: '00:00' });
      return updatedSlots;
    });
  };

  const handleDeleteSlot = (day, index) => {
    setTimeSlots(prevState => {
      const updatedSlots = { ...prevState };
      updatedSlots[day].splice(index, 1);
      return updatedSlots;
    });
  };

  return (
    <div>
      <FormGroup row>
        {daysOfWeek.map(day => (
          <FormControlLabel
            key={day}
            control={<Checkbox checked={selectedDays.includes(day)} onChange={handleDayChange} name={day} />}
            label={day}
          />
        ))}
      </FormGroup>
      {selectedDays.map(day => (
        <div key={day}>
          <h4>{day}</h4>
          {timeSlots[day] && timeSlots[day].map((slot, index) => (
            <div key={index}>
              <TextField
                label="Start Time"
                type="time"
                value={slot.start}
                onChange={(e) => handleTimeChange(e, day, index, 'start')}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
              <TextField
                label="End Time"
                type="time"
                value={slot.end}
                onChange={(e) => handleTimeChange(e, day, index, 'end')}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
              <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} onClick={() => handleDeleteSlot(day, index)}>
                Delete
              </Button>
            </div>
          ))}
          <Button variant="contained" color="primary" onClick={() => handleAddSlot(day)}>
            Add Time Slot
          </Button>
        </div>
      ))}
    </div>
  );
}
