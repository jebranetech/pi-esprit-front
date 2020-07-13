interface EventEntityArgs {
    eventName?: string;
    distance?: number;
    location?: string;
    startDate?: number;
    endDate?: number;
    isTheme?: boolean;
}
export class EventEntity {
    eventName: string
    distance: number
    location:string
    startDate:number
    endDate:number
    isTheme:boolean

    constructor(args: EventEntityArgs = {}) {
        this.eventName = args.eventName;
        this.distance = args.distance;
        this.location = args.location;
        this.startDate = args.startDate;
        this.endDate = args.endDate;
        this.isTheme = args.isTheme;
    }
  }

