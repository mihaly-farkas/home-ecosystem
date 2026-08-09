--- Removes ANSI escape codes from the "log" field in the record.
-- @param tag string: The Fluent Bit tag for the record.
-- @param timestamp number: The timestamp of the log record.
-- @param record table: The log record table containing a "log" field.
-- @return number, number, table: Returns 1, timestamp, and the modified record.
function strip_ansi(_, timestamp, record)
    local log = record["log"]
    if log then
        -- Remove ANSI escape codes
        log = log:gsub("\27%[[0-9;]*m", "")
        record["log"] = log
    end
    return 1, timestamp, record
end

--- Removes decorative lines (lines without alphanumeric or punctuation characters) from the "log" field.
-- @param tag string: The Fluent Bit tag for the record.
-- @param timestamp number: The timestamp of the log record.
-- @param record table: The log record table containing a "log" field.
-- @return number, number, table: Returns 1, timestamp, and the modified record.
function remove_decorative_lines(_, timestamp, record)
    local log = record["log"]
    if not log then
        return 1, timestamp, record
    end

    local cleaned_lines = {}

    for line in log:gmatch("[^\r\n]+") do
        -- If the line contains any alphanumeric or punctuation characters, keep it
        if line:match("[%w%p]") then
            table.insert(cleaned_lines, line)
        end
        -- Otherwise, it's a decorative line and we skip it
    end

    record["log"] = table.concat(cleaned_lines, "\n")
    return 1, timestamp, record
end
