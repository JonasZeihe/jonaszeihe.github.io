#!/usr/bin/env python
# (C) 2025 Jonas Zeihe, MIT License. Developer: Jonas Zeihe. Contact: JonasZeihe@gmail.com

import os
import subprocess
import datetime
import sys


def main():
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))
    os.chdir(root)

    timestamp = datetime.datetime.now().strftime("%Y-%m-%dT%H-%M")
    logfile = f"03_build_log_{timestamp}.txt"

    with open(logfile, "w") as log:
        log.write("Starting Build Process...\n")
        log.write("========================\n")
        log.write(f"{timestamp}\n")
        log.write("========================\n")
        log.write("Running npm run build...\n")

        try:
            subprocess.run(["npm", "run", "build"], check=True, stdout=log, stderr=log)
            log.write("Build completed successfully!\n")
            print("Build completed successfully!")
        except subprocess.CalledProcessError:
            log.write("Build failed.\n")
            print(f"Build failed. Check the log file: {logfile}")
            sys.exit(1)


if __name__ == "__main__":
    main()
