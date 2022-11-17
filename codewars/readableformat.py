# a year is 365 days and a day is 24 hours.
def format_duration(seconds):
    if seconds == 0:
        return 'now'

    else:
        readable_list = ["years", "days", "hours", "minutes", "seconds"]
        years = seconds // 31536000
        days = (seconds % 31536000) // 86400
        hours = ((seconds % 31536000) % 86400) // 3600
        minutes = (((seconds % 31536000) % 86400) % 3600) // 60
        seconds = (((seconds % 31536000) % 86400) % 3600) % 60
        readable_dict = dict(zip(readable_list, [years, days, hours, minutes, seconds]))
        if seconds == 0:
            readable_dict.pop("seconds")
        if minutes == 0:
            readable_dict.pop("minutes")
        if hours == 0:
            readable_dict.pop("hours")
        if days == 0:
            readable_dict.pop("days")
        if years == 0:
            readable_dict.pop("years")

        readable = []
        for key, value in readable_dict.items():
            if value == 1:
                readable.append(f"{value} {key[:-1]}")
            else:
                readable.append(f"{value} {key}")
        if len(readable) == 1:
            return readable[0]
        elif len(readable) == 2:
            return " and ".join(readable)
        elif len(readable) >2:
            return ", ".join(readable[:-1]) + " and " + readable[-1]

print(format_duration(1))
print(format_duration(62))
print(format_duration(120))
print(format_duration(3600))
print(format_duration(3662999))