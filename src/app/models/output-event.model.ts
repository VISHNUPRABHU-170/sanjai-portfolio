import { EventType } from "../constants/event";

export interface OutputEventModel {
  eventType: EventType,
  event: any
}
