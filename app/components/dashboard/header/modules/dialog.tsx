import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "~/components/ui/dialog";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange(open: boolean): void;
}
export default function DialogHeaderDB(props: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(props.open);
  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);
  return (
    <Dialog modal={true} open={isOpen} onOpenChange={props.onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-2 pb-4">
          <div>
            <Label htmlFor="name" className="text-sm">
              Team name
            </Label>
            <Input id="name" placeholder="Acme Inc." className="mt-2" />
          </div>
          <div className="mt-4">
            <Label htmlFor="plan" className="text-sm">
              Subscription plan
            </Label>
            <div className="mt-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Free">
                      Free -{" "}
                      <span className="text-muted-foreground">
                        Trial for two weeks
                      </span>
                    </SelectItem>
                    <SelectItem value="Pro">
                      {" "}
                      Pro -{" "}
                      <span className="text-muted-foreground">
                        $9/months per user
                      </span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>{" "}
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
          </DialogClose>
          <Button size="sm">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
