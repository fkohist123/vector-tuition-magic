
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

// Mock available time slots
const availableTimeSlots = {
  '2023-06-01': ['09:00', '10:00', '14:00'],
  '2023-06-02': ['11:00', '13:00', '15:00'],
  '2023-06-03': ['09:00', '10:00', '11:00', '14:00'],
  '2023-06-05': ['10:00', '11:00', '13:00', '15:00'],
  '2023-06-06': ['09:00', '11:00', '14:00'],
  '2023-06-07': ['10:00', '13:00', '16:00'],
};

// Generate time slots for the current month
const generateTimeSlots = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const timeSlots: Record<string, string[]> = {};
  
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDay = new Date(year, month, day);
    
    // Skip weekends
    if (currentDay.getDay() === 0 || currentDay.getDay() === 6) continue;
    
    // Generate random available time slots
    const slots = [];
    const possibleSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
    const numberOfSlots = Math.floor(Math.random() * 5) + 1; // 1-5 slots
    
    for (let i = 0; i < numberOfSlots; i++) {
      const randomIndex = Math.floor(Math.random() * possibleSlots.length);
      slots.push(possibleSlots[randomIndex]);
      possibleSlots.splice(randomIndex, 1);
    }
    
    slots.sort();
    const dateString = format(currentDay, 'yyyy-MM-dd');
    timeSlots[dateString] = slots;
  }
  
  return timeSlots;
};

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlots, setTimeSlots] = useState<Record<string, string[]>>(generateTimeSlots());
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  
  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedTime(undefined);
  };
  
  const getTimeSlotsForDate = (date: Date | undefined) => {
    if (!date) return [];
    const dateString = format(date, 'yyyy-MM-dd');
    return timeSlots[dateString] || [];
  };
  
  const handleBooking = () => {
    if (!date || !selectedTime) {
      toast.error('Please select both a date and time');
      return;
    }
    
    toast.success('Session booked successfully!', {
      description: `Your session is scheduled for ${format(date, 'MMMM d, yyyy')} at ${selectedTime}`,
    });
    
    // Reset selection
    setDate(undefined);
    setSelectedTime(undefined);
  };
  
  const availableSlots = date ? getTimeSlotsForDate(date) : [];
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="rounded-md border"
              modifiers={{
                available: (date) => {
                  const dateString = format(date, 'yyyy-MM-dd');
                  return !!timeSlots[dateString]?.length;
                },
              }}
              modifiersClassNames={{
                available: 'bg-blue-50 text-blue-600 font-medium hover:bg-blue-100',
              }}
              disabled={(date) => {
                // Disable past dates
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                // Disable weekends
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                
                return date < today || isWeekend;
              }}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Book Your Session</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Selected Date</h4>
                <div className="p-3 bg-gray-50 rounded-md text-muted-foreground">
                  {date ? format(date, 'MMMM d, yyyy') : 'Select a date'}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Available Times</h4>
                
                {date ? (
                  availableSlots.length > 0 ? (
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md text-muted-foreground">
                      No available slots for this date
                    </div>
                  )
                ) : (
                  <div className="p-3 bg-gray-50 rounded-md text-muted-foreground">
                    Select a date first
                  </div>
                )}
              </div>
              
              <Button 
                onClick={handleBooking}
                className="w-full mt-6"
                disabled={!date || !selectedTime}
              >
                Book Session
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
