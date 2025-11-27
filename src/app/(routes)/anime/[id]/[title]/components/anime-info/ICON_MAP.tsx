import { Calendar, Clock, Play, Users, Award, Heart } from "lucide-react";
import React from "react";

export const ICON_MAP: Record<string, React.ReactNode> = {
  aired: <Calendar />,
  duration: <Clock />,
  episodes: <Play />,
  members: <Users />,
  rank: <Award />,
  favorites: <Heart />,
};
