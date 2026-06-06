import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RSVP_DEADLINE = new Date("2026-06-16T00:00:00");

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid number").max(20),
  guests: z.coerce.number().min(1).max(8),
  attend: z.enum(["yes", "no"], { required_error: "Please choose" }),
});
type Values = z.infer<typeof schema>;

export function RsvpForm() {
  const [done, setDone] = useState(false);
  const isPastDeadline = new Date() > RSVP_DEADLINE;
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", phone: "", guests: 1, attend: undefined as unknown as "yes" },
  });

  function onSubmit(_v: Values) {
    if (isPastDeadline) return;
    setDone(true);
    const burst = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 80,
        spread: 70,
        origin,
        colors: ["#1e3a8a", "#2563eb", "#60a5fa", "#ffffff"],
      });
    burst({ x: 0.2, y: 0.7 });
    burst({ x: 0.8, y: 0.7 });
    setTimeout(() => burst({ x: 0.5, y: 0.5 }), 200);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl glass shadow-luxe p-10 text-center"
      >
        <p className="font-script text-4xl text-gold-gradient">Shukran!</p>
        <p className="mt-3 text-mocha/80">
          Your response has been received. We can't wait to celebrate with you, inshaa Allah.
        </p>
      </motion.div>
    );
  }

  if (isPastDeadline) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl glass shadow-luxe p-10 text-center border-red-200 bg-red-50"
      >
        <p className="font-script text-4xl text-red-600">RSVP Closed</p>
        <p className="mt-3 text-mocha/80">
          The RSVP deadline (June 15th) has passed. Please contact us directly if you still wish to attend!
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <div className="mb-4 p-4 rounded-xl bg-gradient-gold/10 border border-gold-deep/30 text-center">
        <p className="text-gold-deep font-semibold">
          📅 RSVP Deadline: June 15th, 2026
        </p>
        <p className="text-sm text-mocha/70 mt-1">
          Please submit your response before the deadline!
        </p>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-2xl glass shadow-luxe p-6 sm:p-8 space-y-5"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your beautiful name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+234 ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Guests</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={8} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="attend"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Will Attend?</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes, joyfully</SelectItem>
                    <SelectItem value="no">Sadly, can't make it</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full h-12 text-base bg-gradient-gold text-ivory border-0 shadow-luxe shimmer"
        >
          Send my RSVP
        </Button>
      </form>
    </Form>
  );
}